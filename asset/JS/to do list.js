let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    chid2 = document.querySelector('.chid2');

btn.addEventListener("click", getValue);

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)

}
var result = range(1, 30);
console.log(result);

function getValue(e) {
    e.preventDefault()
    chid2.innerHTML += `
    <div class="flex justify-center">
    <div class=" relative justify-center mt-6">
        <div class="absolute flex top-0 right-0 p-3 space-x-1">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </span>
        </div>
        <span
            class="absolute -left-3 -top-3 bg-blue-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold">1</span>
        <p class="bg-white px-12 py-8 rounded-lg w-80">${ input.value} </p>
    </div>
    </div>

    `


    input.value = ''


}