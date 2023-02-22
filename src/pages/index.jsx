import React from 'react'

const index = () => {
  return (
    <>
      <div >
        <div className="bg-white px-28 py-6">

          <div className="mb-5">
            <img className="m-auto" src="./assets/logo.svg" alt="" />
          </div>

          <div className="flex items-center gap-2 justify-center">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-2xl">
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" /> 
              <p className="text-base font-semibold">Cuenta</p>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-2xl">
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" /> 
              <p className="text-base font-semibold">Diseño</p>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-2xl">
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" /> 
              <p className="text-base font-semibold">Pagos</p>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-2xl">
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" /> 
              <p className="text-base font-semibold">Envíos</p>
            </div>

          </div>
        </div>

        <div className="bg-gray-50 px-28 py-6">

          <div className="border border-slate-100 p-6 rounded-xl bg-slate-100 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-2 ">
              <p className="text-3xl font-bold">Elige un diseño y personaliza tu tienda</p>
              <div className="flex gap-2">
                <button className="btn btn-outline btn-primary">Configurar más tarde</button>
                <button className="btn bg-green-400">Continuar</button>
              </div>
            </div>

            <div>
              <p className="text-lg font-normal">Puedes cambiarlo más adelante.</p>
            </div>
          </div>

          <div className="border border-white p-6 rounded-xl bg-white mb-6">
            <div className="mb-10">
              <p className="text-2xl font-bold">Elige un diseño</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
              <div>
                <div className="mb-3">
                    <p className="text-lg font-normal">Altair Modern Furniture</p>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <button className="btn">Previsualizar</button>
                    <button className=" btn btn-outline btn-primary">Seleccionar</button>
                  </div>

                  <div className="border p-6 rounded-xl flex justify-center">
                    <img src="./assets/img1.jpg" alt="" />
                  </div>
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-lg font-normal">Altair Modern Furniture</p>
                </div>

                <div className="flex gap-2 mb-6">
                  <button className="btn">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary">Seleccionar</button>
                </div>

                <div className="border p-6 rounded-xl flex justify-center">
                  <img src="./assets/img2.jpg" alt="" />
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-lg font-normal">Altair Modern Furniture</p>
                </div>

                <div className="flex gap-2 mb-6">
                  <button className="btn">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary">Seleccionar</button>
                </div>

                <div className="border p-6 rounded-xl flex justify-center">
                  <img src="./assets/img3.jpg" alt="" />
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-lg font-normal">Altair Modern Furniture</p>
                </div>

                <div className="flex gap-2 mb-6">
                  <button className="btn">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary">Seleccionar</button>
                </div>

                <div className="border p-6 rounded-xl flex justify-center">
                  <img src="./assets/img1.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="border border-white p-6 rounded-xl bg-white mb-6 col-span-5">
              <div className="collapse collapse-arrow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                  <div className="badge badge-lg">1</div>
                  <div>
                      <p className="text-2xl font-bold">Elige un diseño</p>
                  </div>
                </div>
                <div className="collapse-content"> 
                  <p>hello</p>
                </div>
              </div>
            </div>

            <div className="border border-white p-6 rounded-xl bg-white mb-6 col-span-7">
              <p>hola</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="border border-white p-6 rounded-xl bg-white mb-6">
              <p>hola</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default index