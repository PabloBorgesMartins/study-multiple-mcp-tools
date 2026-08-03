import { getMongoDBTool } from '../tools/mongodbTool.ts';
import { getCsvToJSONTool } from '../tools/csvToJSONTool.ts';
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { getFSTool } from '../tools/fsTool.ts';

let client: MultiServerMCPClient | undefined;

export const getMCPTools = async () => {
  client ??= new MultiServerMCPClient({
    mcpServers: {
      ...getMongoDBTool(),
      ...getFSTool()
    },
    onMessage: (log, source) => {
      console.log(`[${source.server}] ${log.data}`);
    }
  });

  const mcpTools = await client.getTools();

  return [
    ...mcpTools,
    getCsvToJSONTool()
  ];
};

export const closeMCPTools = async () => {
  await client?.close();
  client = undefined;
};
