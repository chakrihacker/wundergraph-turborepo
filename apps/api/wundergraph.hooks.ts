import {
    configureWunderGraphHooksWithClient
} from './generated/wundergraph.hooks.configuration'

const wunderGraphHooks = configureWunderGraphHooksWithClient(client => ({
    queries: {},
    mutations: {},
}));

export default wunderGraphHooks;