# API Documentation

## Overview
This project provides a simple API for text translation. Users can send requests with a specific language code and text, and receive the translated text in response.

## Table of Contents
- [Getting Started](#getting-started)
- [Making Requests](#making-requests)
  - [Endpoint Overview](#endpoint-overview)
  - [Request Parameters](#request-parameters)
  - [Response Structure](#response-structure)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
- [FAQ](#faq)

## Getting Started
This section provides an introduction to using the API and its features.

## Making Requests

### Endpoint Overview
Requests can be sent to the following endpoint:
```javascript
https://api.phraseflow.hpokrywka.pl/
```
### Request Parameters
Requests require the following query parameters:
- `text`: The text to be translated (URL-encoded).
- `lang`: The target language code (ISO 639-1 format).

### Response Structure
The response will be a JSON object structured as follows:
```json
{
  "translation": "Translated text",
  "lang": "pl"
}
```

## Examples

### Basic Usage
To use the API, you can make a fetch request as shown below:

```javascript
const text = "Hello";
const lang = "pl";

fetch(`https://api.example.com/translate?text=${encodeURIComponent(text)}&lang=${lang}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## FAQ

### 1. What is this API for?
This API allows you to translate text into different languages using specified language codes.

### 2. What languages are supported?
The API supports various languages identified by ISO 639-1 codes. Please refer to the API documentation for a full list.

### 3. Is the API free to use?
Yes, the API is free to use.

### 4. Are there any usage limits?
No, there are currently no limits on usage for this API.
