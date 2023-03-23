const cutomersResponse = [
  {
    custId: 1,
    custName: "John",
  },
  {
    custId: 2,
    custName: "Peter",
  },
  {
    custId: 3,
    custName: "George",
  },
];

const transactionsResponse = [
  {
    transId: 1,
    custId: 1,
    amount: 75,
    date: "10-05-2022",
    time: "11:10:05",
  },
  {
    transId: 2,
    custId: 3,
    amount: 120,
    date: "10-10-2022",
    time: "14:14:15",
  },
  {
    transId: 3,
    custId: 4,
    amount: 80,
    date: "10-22-2022",
    time: "16:33:08",
  },
  {
    transId: 5,
    custId: 1,
    amount: 150,
    date: "11-06-2022",
    time: "10:21:01",
  },
];

const aCustomerResponse = [
  {
    transId: 1,
    custId: 1,
    amount: 75,
    date: "10-05-2022",
    time: "11:10:05",
  },
  {
    transId: 5,
    custId: 1,
    amount: 150,
    date: "11-06-2022",
    time: "10:21:01",
  },
];

export default async function mockFetch(url) {
  switch (url) {
    case "http://localhost:3000/customers":
      return {
        ok: true,
        status: 200,
        json: async () => cutomersResponse,
      };
    case "http://localhost:3000/transactions":
      return {
        ok: true,
        status: 200,
        json: async () => transactionsResponse,
      };
    case `http://localhost:3000/transactions/?custId=1`:
      return {
        ok: true,
        status: 200,
        json: async () => aCustomerResponse,
      };
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
