def find_nb(m)
    # your code
    n = i = 0
    while n < m do
      i += 1
      n += i**3
    end

    n == m ? (return i) : (return -1)
end
