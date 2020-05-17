class CountriesItem extends HTMLElement {
   set country(country) {
      this._country = country;
      this.render();
   }

   render() {
      this.className = "col-lg-4 col-xl-3 col-sm-6 mb-4"
      this.innerHTML = `
         <div class="card">
            <div class="card-body">
               <h5 class="card-title">${this._country.Country}</h5>
               <div class="row">
                  <div class="col-6 mb-3">
                     <h6 class="card-subtitle mb-1 text-muted">Total Confirmed</h6>
                     <p class="card-text case-font">${this._country.TotalConfirmed}<br>
                     <span>+${this._country.NewConfirmed}</span></p>
                  </div>
                  <div class="col-6 mb-3">
                     <h6 class="card-subtitle mb-1 text-muted">Total Recovered</h6>
                     <p class="card-text text-success case-font">${this._country.TotalRecovered}
                     <br>
                     <span>+${this._country.NewRecovered}</span></p>
                     </p>
                  </div>
                  <div class="col-6">
                     <h6 class="card-subtitle mb-1 text-muted">Total Deaths</h6>
                     <p class="card-text text-danger case-font">${this._country.TotalDeaths}
                     <br>
                     <span>+${this._country.NewDeaths}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      `
   }
}

customElements.define("countries-item", CountriesItem);