class AppLandingCover extends HTMLElement {
   constructor() {
      super();
      this._global = {
         NewConfirmed: 0,
         TotalConfirmed: 0,
         NewDeaths: 0,
         TotalDeaths: 0,
         NewRecovered: 0,
         TotalRecovered: 0
      }
   }

   set global(global) {
      this._global = global;
      this.render();
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
      <div class="jumbotron rounded-0">
         <div class="jumb-content">
            <h1 class="display-5 text-white">Coronavirus Update</h1>
            <div class="card text-white bg-dark mb-3" style="max-width: 25rem;">
               <div class="card-header">Global Cases</div>
               <div class="card-body">
                  <div class="row">
                     <div class="col-6 mb-3">
                        <h6 class="card-subtitle mb-1 text-muted">New Confirmed</h6>
                        <p class="card-text">${this._global.NewConfirmed}</p>
                     </div>
                     <div class="col-6 mb-3">
                        <h6 class="card-subtitle mb-1 text-muted">Total Confirmed</h6>
                        <p class="card-text">${this._global.TotalConfirmed}</p>
                     </div>
                     <div class="col-6 mb-3">
                        <h6 class="card-subtitle mb-1 text-muted">New ecovered</h6>
                        <p class="card-text text-success">${this._global.NewRecovered}</p>
                     </div>
                     <div class="col-6 mb-3">
                        <h6 class="card-subtitle mb-1 text-muted">Total Recovered</h6>
                        <p class="card-text text-success">${this._global.TotalRecovered}</p>
                     </div>
                     <div class="col-6">
                        <h6 class="card-subtitle mb-1 text-muted">New Deaths</h6>
                        <p class="card-text text-danger">${this._global.NewDeaths}</p>
                     </div>
                     <div class="col-6">
                        <h6 class="card-subtitle mb-1 text-muted">Total Deaths</h6>
                        <p class="card-text text-danger">${this._global.TotalDeaths}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      `;
   }
}

customElements.define("app-landing-cover", AppLandingCover);