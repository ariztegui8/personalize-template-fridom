import React from 'react'

const index = () => {
  return (
    <>
      <div >
        <div className="bg-white px-20 py-6">

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

        <div className="bg-[#FAFAFB] px-20 py-6">

          <div className="border border-fridom-blue p-6 rounded-xl bg-fridom-blue mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-2 ">
              <p className="text-3xl font-bold">Elige un diseño y personaliza tu tienda</p>
              <div className="flex gap-2">
                <button className="btn btn-outline bg-fridom text-white capitalize ">Configurar más tarde</button>
                <button className="btn bg-[#1FB611] border-[#1FB611] capitalize ">Continuar</button>
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
                  <button className="btn bg-[#ECEDFD] border-[#ECEDFD] text-black capitalize ">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary capitalize ">Seleccionar</button>
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
                  <button className="btn bg-[#ECEDFD] border-[#ECEDFD] text-black capitalize ">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary capitalize ">Seleccionar</button>
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
                  <button className="btn bg-[#ECEDFD] border-[#ECEDFD] text-black capitalize ">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary capitalize ">Seleccionar</button>
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
                  <button className="btn bg-[#ECEDFD] border-[#ECEDFD] text-black capitalize ">Previsualizar</button>
                  <button className=" btn btn-outline btn-primary capitalize ">Seleccionar</button>
                </div>

                <div className="border p-6 rounded-xl flex justify-center">
                  <img src="./assets/img1.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-2/5">
              <div className="border border-white p-6 rounded-xl bg-white w-full mb-6">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title mb-6">
                    <div className="flex items-center gap-1">
                      <div className="bg-[#ECEDFD] px-3 py-0.5 rounded-full">
                        <p className="text-2xl font-bold">1</p>
                      </div>
                      <p className="text-2xl font-bold">Preheader</p>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="mb-2">
                        <p className="font-bold mb-2">Color de fondo</p>
                        <input type="text" placeholder="Azul" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="mb-2">
                        <p className="font-bold mb-2">Color de texto</p>
                        <input type="text" placeholder="Blanco" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="col-span-2">
                        <p className="font-bold mb-2">Mensaje</p>
                        <input type="text" placeholder="Classic Sports Clothes Amazing For Everybody" className="input input-bordered w-full max-w-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white p-6 rounded-xl bg-white mb-6">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title mb-6">
                    <div className="flex items-center gap-1">
                      <div className="bg-[#ECEDFD] px-3 py-0.5 rounded-full">
                        <p className="text-2xl font-bold">2</p>
                      </div>
                      <p className="text-2xl font-bold">Menú</p>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1">
                      <div className="border rounded-2xl p-2 flex items-center justify-between mb-2">
                        <select className="select select-bordered">
                          <option selected>Item</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                        <input type="checkbox" className="toggle toggle-success" defaultChecked />
                      </div>

                      <div className="border rounded-2xl p-2 flex items-center justify-between mb-2">
                        <select className="select select-bordered">
                          <option selected>Item</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                        <input type="checkbox" className="toggle toggle-success" defaultChecked />
                      </div>

                      <div className="border rounded-2xl p-2 flex items-center justify-between mb-2">
                        <select className="select select-bordered">
                          <option selected>Item</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                        <input type="checkbox" className="toggle toggle-success" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white p-6 rounded-xl bg-white mb-6">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title mb-6">
                    <div className="flex items-center gap-1">
                      <div className="bg-[#ECEDFD] px-3 py-0.5 rounded-full">
                        <p className="text-2xl font-bold">3</p>
                      </div>
                      <p className="text-2xl font-bold">Carrusel</p>
                    </div>
                  </div>
                  <div className="collapse-content p-0 rounded-t-lg">
                    <div className="grid grid-cols-1">

                      <div className="collapse collapse-arrow border mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title bg-[#F1F1F5]">
                          <div>
                            <p className="text-lg font-bold">Diapositiva 1</p>
                          </div>
                        </div>
                        <div className="collapse-content">
                          <div className="grid grid-cols-1 pt-4">
                            <div className='mb-6'>
                              <p className="text-base font-bold mb-2">Imagen</p>
                              <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                            </div>

                            <div className='mb-6'>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="toggle toggle-success mb-1" defaultChecked />
                                <p className="text-base font-bold mb-2">Título</p>
                              </div>
                              <input type="text" placeholder="Classic Sports Clothes Amazing For Everybody" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className='mb-6'>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="toggle toggle-success mb-1" defaultChecked />
                                <p className="text-base font-bold mb-2">Mensaje para tus clientes</p>
                              </div>
                              <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, morbi donec consectetur enim amet ut. Egestas habitasse massa. "></textarea>
                            </div>

                            <div className='mb-6'>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="toggle toggle-success mb-1" defaultChecked />
                                <p className="text-base font-bold mb-2">Botón</p>
                              </div>
                              <input type="text" placeholder="Shop Now" className="input input-bordered w-full max-w-xs" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button className="btn gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          Agregar diapositiva
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white p-6 rounded-xl bg-white mb-6">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title mb-4">
                    <div className="flex items-center gap-1">
                      <div className="bg-[#ECEDFD] px-3 py-0.5 rounded-full">
                        <p className="text-2xl font-bold">4</p>
                      </div>
                      <p className="text-2xl font-bold">Categorías</p>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 pt-4">
                      <div>
                        <button className="btn btn-xs mb-6">Nueva categoría</button>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src="./assets/category1.jpg" alt="" />
                            </div>
                            <div className="flex flex-col max-w-[150px]">
                              <p className="text-sm ">187</p>
                              <p className="text-sm font-bold mb-2">Ropa y accesorios - Calzado</p>
                              <button className="btn btn-xs">Editar</button>
                            </div>
                          </div>
                          <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-fridom" />
                          </div>
                        </div>
                        <div className="divider"></div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src="./assets/category2.jpg" alt="" />
                            </div>
                            <div className="flex flex-col max-w-[150px]">
                              <p className="text-sm ">187</p>
                              <p className="text-sm font-bold mb-2">Ropa y accesorios - Calzado</p>
                              <button className="btn btn-xs">Editar</button>
                            </div>
                          </div>
                          <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-fridom" />
                          </div>
                        </div>
                        <div className="divider"></div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src="./assets/category3.jpg" alt="" />
                            </div>
                            <div className="flex flex-col max-w-[150px]">
                              <p className="text-sm ">187</p>
                              <p className="text-sm font-bold mb-2">Ropa y accesorios - Calzado</p>
                              <button className="btn btn-xs">Editar</button>
                            </div>
                          </div>
                          <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-fridom" />
                          </div>
                        </div>
                        <div className="divider"></div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src="./assets/category1.jpg" alt="" />
                            </div>
                            <div className="flex flex-col max-w-[150px]">
                              <p className="text-sm ">187</p>
                              <p className="text-sm font-bold mb-2">Ropa y accesorios - Calzado</p>
                              <button className="btn btn-xs">Editar</button>
                            </div>
                          </div>
                          <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-fridom" />
                          </div>
                        </div>
                        <div className="divider"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white p-6 rounded-xl bg-white w-full mb-6">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title mb-6">
                    <div className="flex items-center gap-1">
                      <div className="bg-[#ECEDFD] px-3 py-0.5 rounded-full">
                        <p className="text-2xl font-bold">5</p>
                      </div>
                      <p className="text-2xl font-bold">Colores y estilos</p>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="mb-3 col-span-2">
                        <p className="font-bold mb-2">Color principal</p>
                        <input type="text" placeholder="Azul" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="mb-3 col-span-2">
                        <p className="font-bold mb-2">Color secundario</p>
                        <input type="text" placeholder="Naranjo" className="input input-bordered w-full max-w-xs" />
                      </div>

                      <div className="col-span-4">
                        <p className="text-3xl font-bold">Títulos</p>
                      </div>
                      <div className="col-span-2 mb-3">
                        <select className="select select-bordered w-full">
                          <option selected>Font</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div className='mb-3'>
                        <select className="select select-bordered w-full">
                          <option selected>32</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div className='mb-3'>
                        <input type="text" placeholder="negro" className="input input-bordered w-full max-w-xs" />
                      </div>

                      <div className="col-span-4">
                        <p className="text-2xl font-bold">Subtítulos</p>
                      </div>
                      <div className="col-span-2 mb-3">
                        <select className="select select-bordered w-full">
                          <option selected>Font</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div className='mb-3'>
                        <select className="select select-bordered w-full">
                          <option selected>20</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div className='mb-3'>
                        <input type="text" placeholder="negro" className="input input-bordered w-full max-w-xs" />
                      </div>

                      <div className="col-span-4">
                        <p className="text-base">Cuerpo</p>
                      </div>
                      <div className="col-span-2">
                        <select className="select select-bordered w-full">
                          <option selected>Font</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div>
                        <select className="select select-bordered w-full">
                          <option selected>16</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div>
                        <input type="text" placeholder="negro" className="input input-bordered w-full max-w-xs" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>



            </div>

            <div className="w-3/5">
              <div className="border border-white p-6 rounded-xl bg-white w-full">
                <p>Hola</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default index