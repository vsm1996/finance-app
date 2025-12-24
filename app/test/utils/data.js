const initialData = [
  {
    id: 1,
    title: "Parent",
    children: [
      {
        id: 2,
        title: "Child 1",
        children: [
          { id: 3, title: "SubChild 1", status: null },
          { id: 4, title: "SubChild 2", status: null },
        ]
      },
      {
        id: 5,
        title: "Child 2",
        children: [
          { id: 6, title: "SubChild 3", status: null }
        ]
      }
    ]
  }
];

export default initialData