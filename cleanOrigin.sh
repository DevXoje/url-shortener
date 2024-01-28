#!/bin/bash

# Función para limpiar archivos .origin en una carpeta
limpiar_origin() {
    local folder="$1"
    echo "Limpiando archivos .origin en: $folder"
    cd "$folder" || exit
    ls -la | grep ".origin" | xargs rm -f
    git status
    git add .
    git commit -m "Limpiar archivos .origin"
    git push
    echo "Limpieza completada en: $folder"
}

# Limpieza recursiva en el directorio padre
limpiar_origin "$(pwd)"

# Limpieza recursiva en subcarpetas
for folder in $(find . -type d -name .git -prune -o -type d -print); do
    limpiar_origin "$folder"
done

echo "Proceso completado."
