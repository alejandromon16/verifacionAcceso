# Use the official Node.js runtime as a parent image
FROM node:16

ENV DATABASE_URL postgres://postgres:zNlmsQoQAg0ELSJ5@db.puztcnndcqmhjyhjmbkl.supabase.co:5432/postgres
ENV SESSION_SECRET_KEY f836bd390277c81dcefd25fbcc08dfaf09c3a6d7a015ed01d8884db1b1eab96e
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json ./

# Install dependencies
RUN npm install -g blitz
RUN npm install -g npm@9.5.1
RUN npm install --force

# Copy the app code into the container
COPY . ./

RUN blitz prisma generate
RUN blitz build


# Start the app
CMD ["blitz", "start"]
