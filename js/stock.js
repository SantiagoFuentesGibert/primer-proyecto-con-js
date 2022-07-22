class Producto {
    constructor(id,img,nombre,precio){
        this.id = id
        this.img = img
        this.nombre = nombre
        this.precio = precio
    }
}
const procesador = new Producto(id=1, img= 'src../imagenes/INTEL.jpg',"Procesador Intel i7 12700K", 65.000);

const gpuRtx3070= new Producto(id=2, img= 'src../imagenes/giga-gpu.png',"Placa de video Gigabyte Vision RTX 3070 LHR", 260.000);

const watterCoolingAorus = new Producto(id=3, img= 'src../imagenes/watter.png',"Water Cooling Aorus Waterforce X240", 47.000);

const gabineteCorsair4000D = new Producto(id=4, img= 'src../imagenes/gabinete-corsair.jpg',"Gabinete Corsair 4000D AirFlow White", 15.000);

const monitorViewSonic144hz2k = new Producto(id=5, img= 'src../imagenes/monitor-viewsonic.jpg',"Monitor ViewSonic VX3268-2KPC-MHD 32 144hz 2K Curvo", 90.000);

const micrófonoHyperXQuadCast = new Producto(id=6, img= 'src../imagenes/mic-hyperx-quadcast.jpg',"Micrófono HyperX QuadCast",15.000);

const auricularRazerBlackSharkV2X = new Producto(id=7, img= 'src../imagenes/auricular-razer-v2-x.jpg',"Auricular Razer BlackShark V2 X", 7.500);

const mousePadHyperXFurySXXL = new Producto(id=8, img= 'src../imagenes/mouse-pad-hyperx-xxl.jpg',"Mouse Pad HyperX Fury S XXL 900mm x 420mm", 5.500);

const productos = [];
productos.push(procesador)
productos.push(gpuRtx3070)
productos.push(watterCoolingAorus)
productos.push(gabineteCorsair4000D)
productos.push(monitorViewSonic144hz2k)
productos.push(micrófonoHyperXQuadCast)
productos.push(auricularRazerBlackSharkV2X)
productos.push(mousePadHyperXFurySXXL)

export {productos}