export const getUsersPage = (store) => {
    return store.usersPage.users;
};

export const totalUsersCount = (store) => {
    return store.usersPage.totalUsersCount;
};

export const pageSize = (store) => {
    return store.usersPage.pageSize;
};

export const currentPage = (store) => {
    return store.usersPage.currentPage;
};

export const isFetching = (store) => {
  return store.usersPage.isFetching;
};

export const defaultButton = (store) => {
    return store.usersPage.defaultButton
};