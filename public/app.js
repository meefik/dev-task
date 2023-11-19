window.onload = () => {
  const list = document.getElementById('list')
  const search = document.getElementById('search')
  search.onkeyup = async (e) => {
    const res = await fetch(`/api/search?filter=${search.value}`)
    const countries = await res.json()
    list.innerHTML = ''
    for (const country of countries) {
      const li = document.createElement('li')
      li.textContent = `${country.name} (${country.code})`
      list.appendChild(li)
    }
  }
}