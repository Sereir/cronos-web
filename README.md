# Project CRONOS SITE / ADMIN PANEL

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Prerequisites

Make sure you have the following prerequisites installed on your system:

- **Node.js**: The project requires Node.js to be installed.
- **npm**: Fast, disk space efficient package manager.

## Installation

Follow these steps to get the project up and running on your local machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/xxx
   cd xxx
   ```

2. Install dependencies using pnpm:

   ```bash
   npm i
   ```

## Environment Variables

This project requires environment variables to be set. Ensure you have the necessary environment variables configured.

## Usage

To start the development server, run:

```bash
npm start
```

This will start the React development server. You can access the application in your browser at http://localhost:3000.

1. To share your local development server using Laravel Sail, follow these steps:

Start the Sail development server and obtain the share URL:

```bash
./vendor/bin/sail share
```

2. Replace all local URLs in your project with the URL obtained from the Sail share command.

## creating Admin account

1. Use the API to create a new user account.
2. Modify the role of the newly created user to ADMIN.
3. Obtain the JWT token for the ADMIN user and place it in the relevant files where authentication is required.
