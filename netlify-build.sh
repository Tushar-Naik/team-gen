set -e

# Print Docker version
docker --version

# Build the Docker image
docker build -t team-gen .

# Create a temporary container
docker create --name temp-container team-gen

# Copy the built files from the container
docker cp temp-container:/usr/share/nginx/html/. ./build/

# Remove the temporary container
docker rm temp-container

# List contents of build directory
ls -la build/