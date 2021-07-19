export const initialState = {
  posts: {
    data: {
      products: [
        {
          id: 1,
          title: "Car",
          price: "11 000",
          author: "Robert B",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 2,
          title: "Wallet",
          price: "5",
          author: "Jan Sebastian Bach",
          date: "17.06.2021",
          image:
            "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 3,
          title: "Bike",
          price: "2 000",
          author: "Stig",
          date: "5.03.2021",
          image:
            "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 4,
          title: "Car",
          price: "555 000",
          author: "Robert B",
          date: "01.04.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 5,
          title: "Car",
          price: "612 000",
          author: "Will Smith",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 6,
          title: "Car",
          price: "543",
          author: "Robert B",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 7,
          title: "Car",
          price: "500 000",
          author: "DJ DJ",
          date: "15.05.2021",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    loggedOut: true,
    loggedIn: false,
    admin: false,
  },
};
