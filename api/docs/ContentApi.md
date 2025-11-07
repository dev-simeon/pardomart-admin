# ContentApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1ContentTypeGet**](#apiv1contenttypeget) | **GET** /api/v1/content/{type} | Get static content by type|
|[**apiV1ContentTypePatch**](#apiv1contenttypepatch) | **PATCH** /api/v1/content/{type} | Update static content by type (Admin)|

# **apiV1ContentTypeGet**
> Content apiV1ContentTypeGet()

Retrieves the content for a given type, such as PRIVACY_POLICY. This is a public endpoint.

### Example

```typescript
import {
    ContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentApi(configuration);

let type: ContentType; //The type of content to retrieve. (default to undefined)

const { status, data } = await apiInstance.apiV1ContentTypeGet(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **ContentType** | The type of content to retrieve. | defaults to undefined|


### Return type

**Content**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested content. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1ContentTypePatch**
> Content apiV1ContentTypePatch(updateContentPayload, )

Creates or updates the content for a given type. Requires admin privileges. The content should be an HTML string.

### Example

```typescript
import {
    ContentApi,
    Configuration,
    UpdateContentPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentApi(configuration);

let updateContentPayload: UpdateContentPayload; //
let type: ContentType; //The type of content to update. (default to undefined)

const { status, data } = await apiInstance.apiV1ContentTypePatch(
    updateContentPayload,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContentPayload** | **UpdateContentPayload**|  | |
| **type** | **ContentType** | The type of content to update. | defaults to undefined|


### Return type

**Content**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated content. |  -  |
|**400** | Bad request (validation error). |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

