const errorHandler = (error) => {
    let err = {};
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.error &&
      error.response.data.error.statusCode
    ) {
      err = error.response.data.error;
      err.status = error.response.status;
    } else if (error && error.response && error.response.data) {
      err = error.response.data;
      err.status = error.response.status;
    }
  
    const { status = 400, message = 'Something went wrong', extra = 'Something went wrong' } = err;
    switch (status) {
      case 401:
      case 471: {
        // logout
        const logout = new Event('logout_user', {});
        window.dispatchEvent(logout);
      }
  
      case 420: {
        return {
          status,
          message: "You don't have permission to view this",
          extra: message,
        };
      }
  
      case 503: {
        return {
          status,
          message: message || 'Something went wrong!',
          extra: extra,
        };
      }
  
      case 340:
      default:
        return { status, message, extra };
    }
  };
  
  export default errorHandler;
  