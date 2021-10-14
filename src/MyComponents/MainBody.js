import React from 'react'

export default function MainBody() {
    function remove() {
        var w = document.getElementById('button')
        w.style.setProperty('display', 'none')
        var y = document.getElementById('button2')
        y.style.setProperty('display', 'initial')
      }
      function visible() {
        var w = document.getElementById('button2')
        w.style.setProperty('display', 'none')
        var y = document.getElementById('button')
        y.style.setProperty('display', 'initial')
      }
      function remove1() {
        var w = document.getElementById('button3')
        w.style.setProperty('display', 'none')
        var y = document.getElementById('button4')
        y.style.setProperty('display', 'initial')
      }
      function visible1() {
        var w = document.getElementById('button4')
        w.style.setProperty('display', 'none')
        var y = document.getElementById('button3')
        y.style.setProperty('display', 'initial')
      }
    return (
        <div>
            <div class="row1 row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://source.unsplash.com/1600x900/?boy" class="card-img-top" alt="..." />
                        <div class="like">
                            <button onClick={remove} id="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="img1" fill="currentColor"
                                    class="bi bi-heart visible1" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>
                            <button onClick={visible} id="button2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                    class="bi bi-heart-fill visible2" id="img2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                            </button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Refresh Get new Image</h5>
                            <p class="card-text">Here You can type about the image.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://source.unsplash.com/1600x900/?baby" class="card-img-top" alt="..." />
                        <div class="like">
                            <button onClick={remove1} id="button3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="img1" fill="currentColor"
                                    class="bi bi-heart visible1" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>
                            <button onClick={visible1} id="button4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                    class="bi bi-heart-fill visible2" id="img2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                            </button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Get Only image of Baby </h5>
                            <p class="card-text">In Both Image src an api is used.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
