function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if (Number.isInteger(Math.sqrt(sq))){
    return Math.pow(Math.sqrt(sq) + 1, 2)
  }
  else{
    return -1;
  }
}
