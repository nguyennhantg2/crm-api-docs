# Pancake CRM API Documentation

RESTful API documentation for Pancake CRM, including record management, deal management, order management, product management, sources, pancake tags, and webhook events.

- **Version**: 2.0.0
- **Base URL**: `https://crm.pancake.vn/api`
- **Auth**: API key (query param `api_key`) — generate in *Pancake CRM → Settings → Tools*

## Key Features

- Record management (list, get, upsert, delete) — supports lead, account, and contact tables
- Deal management (list, get, create, update) — sales opportunities with pipeline statuses
- Order management (list, get, create, update) — sales orders with line items
- Product management (list, create, update)
- Customer sources
- Pancake tags (record classification labels)
- Real-time webhooks for record change events

## Main Endpoints

**Records**
- `GET/POST/DELETE /workspaces/{workspace_id}/{table_name}/records` — Record CRUD (lead, account, contact)
- `GET /workspaces/{workspace_id}/record/{record_id}` — Get a single record

**Deals**
- `GET /workspaces/{workspace_id}/deals` — List deals (paginated, `view=kanban` groups by status)
- `POST /workspaces/{workspace_id}/deals` — Create deal
- `GET /workspaces/{workspace_id}/deals/{id}` — Get a single deal
- `PUT /workspaces/{workspace_id}/deals/{id}` — Update deal (soft-delete with `is_removed: true`)

**Orders**
- `GET /workspaces/{workspace_id}/orders` — List orders (paginated)
- `POST /workspaces/{workspace_id}/orders` — Create order
- `GET /workspaces/{workspace_id}/orders/{id}` — Get a single order
- `PUT /workspaces/{workspace_id}/orders/{id}` — Update order

**Products**
- `GET /workspaces/{workspace_id}/products` — List products
- `POST /workspaces/{workspace_id}/products` — Create product
- `PUT /workspaces/{workspace_id}/products/{product_id}` — Update product

**Metadata**
- `GET /workspaces/{workspace_id}/sources` — List customer sources
- `GET /workspaces/{workspace_id}/pancake_tags` — List pancake tags
- `GET /workspaces/{workspace_id}/module_statuses` — List pipeline statuses (`table_id=deals` for the deal pipeline)

## Webhooks

Pancake CRM can push record change events to your HTTP endpoint in real-time. See [`openapi/webhook.yaml`](./openapi/webhook.yaml) for payload schema and setup instructions.

## Internal Third Party

Internal API used by other Pancake products (Pancake, Botcake, Webcake, Storecake…) to read and write CRM data on behalf of a connected page. Each third party is registered with its own **secret key** (`Authorization: Bearer <secret_key>`) — not a workspace `api_key` — and calls its own path scope.

- Base URL: `/api/internal_third_party`
- `GET /workspaces` — Resolve workspaces of a page or user (with table metadata)
- `GET /users` — List members of the workspace a page is connected to
- `GET/POST /{third_party}/{page_id}/records` — List/get records by `psid`, upsert records
- `POST /{third_party}/{page_id}/tickets` — Create ticket linked to a contact
- `POST /{third_party}/{page_id}/tasks` — Create task

`{third_party}` is `botcake`, `webcake` or `storecake`; it also decides which workspace tables are visible. Only `botcake` has routes registered on the server today.

## Documentation

- OpenAPI spec: [`openapi/openapi.yaml`](./openapi/openapi.yaml)
- Webhook spec: [`openapi/webhook.yaml`](./openapi/webhook.yaml)
- Internal third party spec: [`openapi/internal_third_party.yaml`](./openapi/internal_third_party.yaml)