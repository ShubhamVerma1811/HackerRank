#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the caesarCipher function below.


def caesarCipher(s, k):
    result = ""
    for char in s:
        n = ord(char)
        if 64 < n < 91:
            n = ((n - 65 + k) % 26) + 65
        if 96 < n < 123:
            n = ((n - 97 + k) % 26) + 97
        result = result + chr(n)
    return result


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    k = int(input())

    result = caesarCipher(s, k)

    fptr.write(result + '\n')

    fptr.close()
