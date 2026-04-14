# Pancake CRM API Documentation

RESTful API documentation for Pancake CRM, including record management, sources, pancake tags, and webhook events.

- **Version**: 2.0.0
- **Base URL**: `https://crm.pancake.vn/api`
- **Auth**: API key (query param `api_key`) — generate in *Pancake CRM → Settings → Tools*

## Key Features

- Record management (list, get, upsert, delete)
- Customer sources
- Pancake tags (record classification labels)
- Real-time webhooks for record change events

## Main Endpoints

- `GET/POST/DELETE /workspaces/{workspace_id}/{table_name}/records` — Record CRUD
- `GET /workspaces/{workspace_id}/record/{record_id}` — Get a single record
- `GET /workspaces/{workspace_id}/sources` — List customer sources
- `GET /workspaces/{workspace_id}/pancake_tags` — List pancake tags

## Webhooks

Pancake CRM can push record change events to your HTTP endpoint in real-time. See [`openapi/webhook.yaml`](./openapi/webhook.yaml) for payload schema and setup instructions.

## Documentation

- OpenAPI spec: [`openapi/openapi.yaml`](./openapi/openapi.yaml)
- Webhook spec: [`openapi/webhook.yaml`](./openapi/webhook.yaml)