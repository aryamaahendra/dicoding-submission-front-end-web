import './countries-list.js'

class Pagination extends HTMLElement {
   constructor() {
      super();
      this._data = [1];
      this._perPage = 8;
      this._page = 1;
      this._totalPage = Math.ceil(this._data.length / this._perPage);
      this._countriesListElement = document.querySelector("countries-list");
   }

   connectedCallback() {
      this.render();
   }

   set data(data) {
      this._data = data;
      this._totalPage = Math.ceil(this._data.length / this._perPage);
      this.render();
   }

   render() {
      const start = (this._page - 1) * this._perPage;
      this._countriesListElement.countries = this._data.slice(start, start + this._perPage);
      let temp = `
         <ul class="pagination pagination justify-content-center">
            <li class="page-item ${(this._page == 1)?"disabled" : ""}">
               <button class="page-link" value="prev">prev</button>
            </li>`;

      if (this._totalPage > 5) {
         if (this._page <= 3) {
            for (let i = 1; i < 5 + 1; i++) {
               temp += `
            <li class="page-item ${(this._page == i)? "active" : ""}"><button class="page-link" value="${i}">${i}</button></li>
            `;
            }
         } else if (this._page > this._totalPage - 3) {
            for (let i = this._totalPage - 4; i < this._totalPage + 1; i++) {
               temp += `
            <li class="page-item ${(this._page == i)? "active" : ""}"><button class="page-link" value="${i}">${i}</button></li>
            `;
            }
         } else {
            for (let i = this._page - 2; i < this._page + 3; i++) {
               temp += `
            <li class="page-item ${(this._page == i)? "active" : ""}"><button class="page-link" value="${i}">${i}</button></li>
            `;
            }
         }
      } else {
         for (let i = 1; i < this._totalPage + 1; i++) {
            temp += `
         <li class="page-item ${(this._page == i)? "active" : ""}"><button class="page-link" value="${i}">${i}</button></li>
         `;
         }
      }

      temp += `
            <li class="page-item ${(this._totalPage == this._page)?"disabled" : ""}">
               <button class="page-link" value="next">next</button>
            </li>
         </ul>`
      this.innerHTML = temp

      const bunttons = this.querySelectorAll('.page-link');
      bunttons.forEach(button => {
         button.addEventListener('click', (e) => {
            if (e.target.value != 'next' && e.target.value != 'prev') {
               this._page = parseInt(e.target.value);
            } else {
               if (e.target.value == 'next') {
                  this._page++
               } else {
                  this._page--;
               }
            }
            this.render();
         })
      });
   }
}
customElements.define("app-pagination", Pagination);