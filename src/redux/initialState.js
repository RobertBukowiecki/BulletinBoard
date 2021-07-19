export const initialState = {
  posts: {
    data: {
      products: [
        {
          id: 1,
          title: "Car",
          price: "11 000",
          author: "John",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 2,
          title: "Car",
          price: "5",
          author: "Jan Sebastian Bach",
          date: "17.06.2021",
          image:
            "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 3,
          title: "Car",
          price: "2 000",
          author: "Stig",
          date: "5.03.2021",
          image:
            "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 4,
          title: "Car",
          price: "555 000",
          author: "John",
          date: "01.04.2021",
          image:
            "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 5,
          title: "Car",
          price: "612 000",
          author: "Will Smith",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 6,
          title: "Car",
          price: "543",
          author: "John",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 7,
          title: "Car",
          price: "500 000",
          author: "John",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
    },
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    login: "John",
    isLogged: false,
    admin: false,
  },
};
