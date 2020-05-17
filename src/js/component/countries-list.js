import './countries-item.js'

class CountriesList extends HTMLElement {
   set countries(countries) {
      this._countries = countries;
      this.render();
   }

   render() {
      this.innerHTML = "";
      this._countries.forEach(country => {
         const countriesItemElement = document.createElement("countries-item")
         countriesItemElement.country = country;
         this.appendChild(countriesItemElement);
      });
   }

   renderError(message) {
      this.innerHTML = "";
      this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
}

customElements.define("countries-list", CountriesList);