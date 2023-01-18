import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const handlePrev = () => {

    if (currentPageState > 1) {

      setCurrentPageState(currentPageState - 1);

      onPageChange(currentPageState - 1);

    }

  };

  const handleNext = () => {

    if (currentPageState < totalPages) {

      setCurrentPageState(currentPageState + 1);

      onPageChange(currentPageState + 1);

    }

  };

  const handlePageChange = (page) => {

    setCurrentPageState(page);

    onPageChange(page);

  };

  return (

    <View style={styles.container}>

      <TouchableOpacity

        style={styles.arrow}

        onPress={handlePrev}

        disabled={currentPageState === 1}

      >

        <Text style={styles.arrowText}>{'<'}</Text>

      </TouchableOpacity>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (

        <TouchableOpacity

          key={page}

          style={[styles.page, currentPageState === page && styles.activePage]}

          onPress={() => handlePageChange(page)}

        >

          <Text>{page}</Text>

        </TouchableOpacity>

      ))}

      <TouchableOpacity

        style={styles.arrow}

        onPress={handleNext}

        disabled={currentPageState === totalPages}

      >

        <Text style={styles.arrowText}>{'>'}</Text>

      </TouchableOpacity>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

  },

  arrow: {

    padding: 10,

  },

  arrowText: {

    fontSize: 20,

  },

  page: {

    padding: 10,

  },

  activePage: {

    backgroundColor: 'lightblue',

  },

});

export default Pagination;

