const fs = require('fs');
const path = require('path');
const gltfPipeline = require('gltf-pipeline');

// Función para convertir GLB a GLTF
async function convertGLBtoGLTF(inputPath, outputPath) {
    try {
        // Lee el archivo GLB
        const glbBuffer = fs.readFileSync(inputPath);
        
        // Convierte GLB a GLTF
        const { gltf } = await gltfPipeline.glbToGltf(glbBuffer);
        
        // Guarda el archivo GLTF
        fs.writeFileSync(outputPath, JSON.stringify(gltf, null, 2));
        console.log(`Conversion successful: ${outputPath}`);
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

// Cambia los nombres de los archivos de entrada y salida según sea necesario
const inputFilePath = path.join(__dirname, 'input.glb');
const outputFilePath = path.join(__dirname, 'output.gltf');

convertGLBtoGLTF(inputFilePath, outputFilePath);
