const { findAverageRating } = require('../client/src/components/overview/GalleryView.jsx');
// const jest = require('jest');
// const { dateParser } = require('../client/src/components/questions/Answer.jsx');
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor, fireEvent } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');

describe('FEC - Omozan overview tests', function() {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<App />);
  })

  it('should render the overview', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.queryByText(/I'll tell/)).toBeInTheDocument();
      })
  })

  test('Overview should have 8 separate components on render', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('overview').children.length).toBe(8);
      })
  })

  test('should take in an object of ratings and the count of each rating and returns a value to the nearest quarter', () => {
    expect(findAverageRating({1: '16', 2: '12', 3: '58', 4: '45', 5: '58'})).toBe("3.50");
  })

  test('ensure that stars do not have any text', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('stars')).toHaveTextContent('Read all');
      }).then(() => {
        expect(screen.getByDisplayValue("Add to Bag")).toHaveTextContent('');
      })
  })

  test('When rendered, there should be 6 photos for slacks product', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.queryByTestId('vertical-carousel').children.length).toBe(8)
    })
  })

  // These tests ensure that the form has all of the components and correct number of selections
  it('should not have a size selected on render', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.getByRole('option', { name: '-- select a size --' }).selected).toBe(true)
    })
  })

  it('should display the correct number of options', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.getByTestId('size-options').children.length).toBe(7)
    });
  });

  it('should display the correct number of quantities', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.getByTestId('quant-options').children.length).toBe(8)
    });
  });

  it('should change the background color to red when clicking add to bag without a size selected', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      return user.click(screen.getByTestId('add-to-bag'))
    }).then(() => {
      expect(screen.getByTestId('size-options')).toHaveStyle(`backgroundColor: d107079b`);
    });
  });

  it('should change the size with the size select dropdown', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      return user.selectOptions(screen.getByTestId('size-options'), screen.getByRole('option', {name: 'S'}))
    }).then(() => {
      expect(screen.getByTestId('size-options')).toHaveTextContent(/S/);
    });
  });

  it('should change the color of the star when the favorite button is clicked', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      return user.click(screen.getByTestId('favorite-button'))
    }).then(() => {
      expect(screen.getByTestId('fav-star')).toHaveStyle(`color: yellow`);
    });
  });

  it('should change the style when clicked', () => {
    var currentStyle = '';
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        currentStyle = screen.getByTestId('carousel').children[0];
        return user.click(document.getElementsByClassName('style-button')[1])
      }).then(() => {
        expect(currentStyle).not.toBe(screen.getByTestId('carousel').children[1]);
      })
  })

  it('should not change the style when the same style is clicked', () => {
    var currentStyle = '';
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        currentStyle = screen.getByTestId('carousel').children[0];
        return user.click(document.getElementsByClassName('style-button')[0])
      }).then(() => {
        expect(currentStyle).toBe(screen.getByTestId('carousel').children[0]);
      })
  })

  // Rendering tests
  it('should display the description upon rendering', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.queryByTestId('description')).toHaveTextContent(/after I nap for a bit/)
      });
  });

  it('should display the facts upon rendering', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.queryByTestId('facts').children.length).toBe(2)
      });
  });

  it('should display the style name, number of reviews, category, product name and price upon rendering', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.queryByTestId('style-name')).toHaveTextContent(/Black/);
        expect(screen.queryByTestId('review-count')).toHaveTextContent('Read all 5 reviews');
        expect(screen.queryByTestId('category')).toHaveTextContent(/Pants/);
        expect(screen.queryByTestId('product-name')).toHaveTextContent(/Slacker\'s Slacks/);
        expect(screen.queryByTestId('price')).toHaveTextContent(/\$65\.00/);
      });
  });

  // These upcoming tests are all testing if the element calls on a function onClick
  it('should change the x value when clicking the right side button', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('right-arrow'));
      }).then(() => {
        expect(screen.getByTestId('carousel')).toHaveTextContent(/-100/)
      })
  });

  it('should change the x value when clicking the left side button', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('right-arrow'));
      }).then(() => {
        return user.click(screen.getByTestId('left-arrow'));
      }).then(() => {
        expect(screen.getByTestId('carousel')).toHaveTextContent(/0/)
      })
  });

  // these tests only work if the style has more than seven photos
  it('should change the y value when clicking the up button', () => {
    // use poduct id 37315
    return waitFor(() => expect(screen.queryByText(/Now where da/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('down-arrow'));
      }).then(() => {
        return user.click(screen.getByTestId('up-arrow'));
      }).then(() => {
        expect(screen.getByTestId('carousel')).not.toHaveTextContent(/-135/)
      })
  });

  it('should change the y value when clicking the down button', () => {
    // use poduct id 37315
    return waitFor(() => expect(screen.queryByText(/Now where da/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('down-arrow'));
      }).then(() => {
        expect(screen.getByTestId('carousel')).toHaveTextContent(/-135/)
      })
  });

  it('should change the x value when clicking on the thumbnails', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('vertical-carousel').children[2]);
      }).then(() => {
        expect(screen.getByTestId('carousel')).toHaveTextContent(/-100/)
      })
  })

  it('should change to expanded view when an image is clicked on', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('carousel').children[0])
      }).then(() => {
        expect(screen.getByTestId('expanded-image')).toHaveStyle(`backgroundImage: url(https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)`);
      });
  });

  it('should change the image rendered when an icon is clicked', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('carousel').children[0])
      }).then(() => {
        return user.click(screen.getByTestId('expanded-icons').children[1])
      }).then(() => {
        expect(screen.getByTestId('expanded-image')).not.toHaveStyle(`backgroundImage: url(https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)`);
      });
  });

  it('should return the expanded view to gallery', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByTestId('carousel').children[0])
      }).then(() => {
        return user.click(screen.getByTestId('shrink-button'))
      }).then(() => {
        expect(screen.queryByText(/I'll tell/)).toBeInTheDocument();
      });
  });
})