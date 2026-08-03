import { getMongoDBTool } from '../tools/mongodbTool.ts';
import { MultiServerMCPClient } from '@langchain/mcp-adapters';

export const getMCPTools = async () => {
  const client = new MultiServerMCPClient({
    mcpServers: {
      ...getMongoDBTool()
    },
    onMessage: (log, source) => {
      console.log(`[${source.server}] ${log.data}`);
    }
  });

  const mcpTools = await client.getTools();

  return [
    ...mcpTools
  ];
};
