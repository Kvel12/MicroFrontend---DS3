# Microfrontend Architecture for Project Management System - DS3

## Overview
This project implements a microfrontend architecture to create a modular and scalable Project Management System. The application is divided into independent frontend services, each responsible for specific functionality while maintaining a cohesive user experience.

## Architecture Structure
```
/microfrontend-ds3
├── container/          # Main container application
├── auth/              # Authentication service
├── projects/          # Project management service
├── payments/          # Payment processing service
├── support/          # Support ticket system
└── shared/           # Shared components and utilities
```

## Technologies Used
- **React**: Frontend library for building user interfaces
- **Material-UI**: Component library for consistent design
- **Webpack Module Federation**: For microfrontend implementation
- **Docker**: Containerization
- **Kubernetes**: Container orchestration
- **Nginx**: Web server and reverse proxy

### Webpack Module Federation Advantages
- Independent deployment of frontend services
- Runtime integration of microfrontends
- Shared dependencies between services
- Isolated development and testing
- Team scalability and autonomy

## Deployment Instructions

### 1. Building and Pushing Images
First, ensure you have Docker installed and access to a container registry (GitHub Container Registry or Docker Hub).

Using build script:
```bash
# Execute build script
./build.bat
```

Or manually:
```bash
# Build images
docker build -t ghcr.io/your-username/container-app:latest ./container
docker build -t ghcr.io/your-username/auth-app:latest ./auth
docker build -t ghcr.io/your-username/projects-app:latest ./projects
docker build -t ghcr.io/your-username/payments-app:latest ./payments
docker build -t ghcr.io/your-username/support-app:latest ./support

# Push images
docker push ghcr.io/your-username/container-app:latest
docker push ghcr.io/your-username/auth-app:latest
docker push ghcr.io/your-username/projects-app:latest
docker push ghcr.io/your-username/payments-app:latest
docker push ghcr.io/your-username/support-app:latest
```

### 2. Kubernetes Deployment
Apply the Kubernetes configuration:
```bash
# Apply configuration
kubectl apply -f microfrontendk8s.yml

# Verify pods status
kubectl get pods -n microfrontends

# Check services
kubectl get services -n microfrontends

# View logs
kubectl logs -n microfrontends -l app=container-app

# Delete all resources
kubectl delete -f kubernetes-config.yml
```

## Available Endpoints
- **Main Container**: `http://10.0.0.10:30080/`
- **Authentication Service**: `http://10.0.0.10:30080/auth/`
  - Login and registration functionality
- **Projects Service**: `http://10.0.0.10:30080/projects/`
  - Project management dashboard
- **Payments Service**: `http://10.0.0.10:30080/payments/`
  - Payment processing and invoices
- **Support Service**: `http://10.0.0.10:30080/support/`
  - Support ticket system

## Development Team
- Juan Cifuentes
- Miguel Moreno
- José Palma
- Yhan Carlos Trujillo
- Brayan Urrea
- David Urrego
- Kevin Velez

## Testing Credentials
For testing purposes, use:
- Email: demo@example.com
- Password: demo123
