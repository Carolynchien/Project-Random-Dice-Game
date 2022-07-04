const section = document.querySelector('section')

const createDiv = (num) => {
  let nineS = 8
  let tenS = 31
  let sixyS = 24
  for (let i = 0; i < num; i++) {
    const divElement = document.createElement('div')
    divElement.classList.add('block')
    if (i % 10 === 9) {
      divElement.id = `${++nineS}`
      divElement.textContent = `${nineS}`
      divElement.style.backgroundColor = 'green'
    }
    if (i % 10 === 0) {
      divElement.id = `${--tenS}`
      divElement.textContent = `${tenS}`
      divElement.style.backgroundColor = 'green'
    }
    if (i >= 0 && i <= 8) {
      divElement.id = `${i}`
      divElement.textContent = `${i}`
      divElement.style.backgroundColor = 'green'
    }
    if (i >= 61 && i <= 68) {
      divElement.id = `${sixyS--}`
      divElement.textContent = `${sixyS}`
      divElement.style.backgroundColor = 'green'
    }

    section.append(divElement)
  }
}

createDiv(70)

let s1 = ''
s1 += 1
console.log(typeof s1)

const loopDiv = () => {
  let num = 0
  let s = ''
  console.log('hi')
  const allDiv = document.querySelectorAll('.block')

  for (let div of allDiv) {
    num++
    s += num
    console.log(typeof s)
    if (div.id === s) {
      console.log(div.id)
      div.style.backgroundColor = 'black'
      s = ''
    }
  }
}

loopDiv()

// const int = setInterval(loopDiv, 1000)

const input = document.querySelector('.input')
console.log(input)
