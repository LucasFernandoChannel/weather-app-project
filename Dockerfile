# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy your web app files to the default Nginx document root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]