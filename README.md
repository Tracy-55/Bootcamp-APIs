# Bootcamp APIs

## Overview

The **Bootcamp APIs** project provides a set of RESTful APIs for different functionalities, including word game analysis, phone bill calculation, and airtime check. This project also includes AlpineJS widgets to interact with these APIs and display results on a web page.

## APIs

### 1. Word Game API

- **Endpoint:** `/api/word_game`
- **Method:** `GET`
- **Query Parameter:** `sentence` - The sentence to analyze.
- **Response:**

  ```json
  {
    "longestWord": 8,
    "shortestWord": "the",
    "sum": 23
  }
