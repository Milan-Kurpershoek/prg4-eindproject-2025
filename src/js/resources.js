import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Seagull: new ImageSource('images/seagull.png'),
    Plane: new ImageSource('images/plane.png'),
    Kite: new ImageSource('images/kite.png'),
    Beach: new ImageSource('images/beach.png', { wrapping: ImageWrapping.Mirror }),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }