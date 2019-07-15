


export const state = () => {
  return {
    posts: [
      {
        _id: '1',
        title: 'My First Post',
        subtitle: 'My First Subtitle',
        createdAt: new Date(),
        isRead: false
      },
      {
        _id: '2',
        title: 'My Second Post',
        subtitle: 'My Second Subtitle',
        createdAt: new Date(),
        isRead: true
      }
    ]
  }
}
