@echo off

echo Building container...
cd container
docker build -t ghcr.io/your-username/container-app:latest .
cd ..

echo Building auth...
cd auth
docker build -t ghcr.io/your-username/auth-app:latest .
cd ..

echo Building projects...
cd projects
docker build -t ghcr.io/your-username/projects-app:latest .
cd ..

echo Building payments...
cd payments
docker build -t ghcr.io/your-username/payments-app:latest .
cd ..

echo Building support...
cd support
docker build -t ghcr.io/your-username/support-app:latest .
cd ..

echo Build complete

echo Pushing to GitHub Container Registry...

docker push ghcr.io/your-username/container-app:latest
docker push ghcr.io/your-username/auth-app:latest
docker push ghcr.io/your-username/projects-app:latest
docker push ghcr.io/your-username/payments-app:latest
docker push ghcr.io/your-username/support-app:latest

echo Push complete