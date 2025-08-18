import React from 'react'
import Nav from '../all/nav'

function order() {
    return (
        <>
        <Nav/>
        <div class="bg-gray-100 p-8">
            <div class="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
                <h2 class="text-xl font-semibold mb-4">My Orders / Tracking</h2>


                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-6 border border-gray-200 p-4 rounded">
                    <div><span class="font-medium">Order ID:</span> OD45345345435</div>
                    <div><span class="font-medium">Estimated Delivery:</span> 29 Nov 2019</div>
                    <div><span class="font-medium">Shipping By:</span> BLUEDART, 📞 +1598675986</div>
                    <div><span class="font-medium">Tracking #:</span> BD045903594059</div>
                </div>

                <div class="flex justify-between items-center mb-6">

                    <div class="flex flex-col items-center text-center">
                        <div class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">✓</div>
                        <span class="mt-2 text-sm font-medium text-orange-500">Order confirmed</span>
                    </div>
                    <div class="flex-1 border-t-2 border-orange-500 mx-2"></div>

                    <div class="flex flex-col items-center text-center">
                        <div class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">📦</div>
                        <span class="mt-2 text-sm font-medium text-orange-500">shipped</span>
                    </div>
                    <div class="flex-1 border-t-2 border-gray-300 mx-2"></div>

                    <div class="flex flex-col items-center text-center">
                        <div class="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">🚚</div>
                        <span class="mt-2 text-sm font-medium text-gray-500">Out for Delivery</span>
                    </div>
                    <div class="flex-1 border-t-2 border-gray-300 mx-2"></div>

                    <div class="flex flex-col items-center text-center">
                        <div class="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">📦</div>
                        <span class="mt-2 text-sm font-medium text-gray-500">Delivered</span>
                    </div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                    <div class="flex gap-4 items-center border p-4 rounded">
                        <img src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg" alt="" class="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p class="text-sm font-medium">Potato-Chandramukhi-2kg</p>
                                <p class="text-sm text-gray-600">$64($32/kg)</p>
                            </div>
                    </div>

                    <div class="flex gap-4 items-center border p-4 rounded">
                        <img src="https://images.pexels.com/photos/5501687/pexels-photo-5501687.jpeg" alt="" class="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p class="text-sm font-medium">Pumpkin Green / Kumro-500gm</p>
                                <p class="text-sm text-gray-600">$21.60($0.04/g)</p>
                            </div>
                    </div>

                    <div class="flex gap-4 items-center border p-4 rounded">
                        <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg" alt="" class="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p class="text-sm font-medium">Carrot-Orange-500gm</p>
                                <p class="text-sm text-gray-600">$44.80($0.09/g)</p>
                            </div>
                    </div>

                    <div class="flex gap-4 items-center border p-4 rounded">
                        <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg" alt="" class="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p class="text-sm font-medium">Chilli-Green,Organically Grown-100gm</p>
                                <p class="text-sm text-gray-600">$14.40($0.14/g)</p>
                            </div>
                    </div>

                    <div class="flex gap-4 items-center border p-4 rounded">
                        <img src="https://images.pexels.com/photos/6848574/pexels-photo-6848574.jpeg" alt="" class="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p class="text-sm font-medium">Banana-500gm-(Approx. 3-4pcs)</p>
                                <p class="text-sm text-gray-600">$32.50</p>
                            </div>
                    </div>
                </div>


            </div>
        </div>
        </>
        
    )
}

export default order