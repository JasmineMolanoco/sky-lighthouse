import allTextures from '../../public/assets/planetes/planetes-textures.json' assert { type: 'JSON' };

const path ='assets/planetes/'
// get a random texture from the list
export function getRandomTexture() {
  
  let i = Math.floor(Math.random() * (17 - 0 + 1) + 0)
  return path+allTextures[i].src
}
