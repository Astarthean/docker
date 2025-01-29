# Introducción a Kubernetes

<p align="center">
  <a href="https://kubernetes.io/" target="blank">
    <img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="150" alt="Kubernetes Logo" />
  </a>
</p>

# 📦 Características principales

- **Orquestación de contenedores**: Kubernetes automatiza la implementación, escalado y administración de aplicaciones en contenedores.
- **Minikube**: Una herramienta para ejecutar Kubernetes localmente en una máquina virtual.
- **Kubectl**: La CLI oficial para interactuar con clústeres de Kubernetes.

# 🚀 Instalación

```bash
winget install Kubernetes.minikube
```

## 📂 Archivos de configuración

Este proyecto incluye varios archivos YAML que definen los diferentes recursos necesarios para la orquestación con Kubernetes:

- **`backend-secrets.yml`**: Contiene las credenciales y secretos necesarios para el backend.
- **`backend.yml`**: Define la configuración y despliegue del servicio backend.
- **`pg-admin-secrets.yml`**: Almacena las credenciales para el servicio de administración de PostgreSQL (pgAdmin).
- **`pg-admin.yml`**: Configura y despliega el servicio de pgAdmin dentro del clúster.
- **`postgres-config.yml`**: Define los parámetros de configuración para PostgreSQL.
- **`postgres-secrets.yml`**: Contiene los secretos necesarios para la base de datos PostgreSQL.
- **`postgres.yml`**: Configuración y despliegue del servicio PostgreSQL en Kubernetes.
  <br>
  <br>

> **Importante**: Para que los demás archivos funcionen correctamente, primero deben aplicarse los archivos de secretos (`backend-secrets.yml`, `pg-admin-secrets.yml` y `postgres-secrets.yml`).

Además, este proyecto utiliza una imagen de Docker personalizada para el backend, disponible en:

🔗 **[Docker Hub - Teslo Shop Backend](https://hub.docker.com/repository/docker/astarthean/teslo-shop-backend/general)**

## Comandos útiles Minikube

```bash
# Pausar Minikube
minikube pause

# Reanudar Minikube
minikube unpause

# Detener Minikube
minikube stop

# Eliminar todos los clústeres de Minikube
minikube delete --all
```

## Comandos útiles Kubectl

```bash
# Aplicar archivos de configuración
kubectl apply -f postgres-config.yml
kubectl apply -f postgres-secrets.yml
kubectl apply -f postgres.yml

# Obtener todos los recursos en el clúster
kubectl get all

# Ver logs de un deployment / service específico
kubectl logs <nombre-del-deployment>

# Describe un deployment / service específico
kubectl logs <nombre-del-deployment>
```
