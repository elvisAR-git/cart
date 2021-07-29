let items = [
  {
    id: 1,
    name: "Honda Civic TypeR",
    price: 37000,
  },
  {
    id: 2,
    name: "BMW M3 350i",
    price: 34000,
  },
];

function getItem(id){
    return Promise((reject, resolve) => {
        setTimeout(
            items.forEach(element => {
                if (element.id === id)
                {
                    resolve(element)
                }
            
            }, 1000);
        )
    })
}