function toFaWord(num) {
    uniqNumbers = { // A dictionary for unique numbers that we cannot construct from their combinations
        1: 'یک', 2: 'دو', 3: 'سه', 4: 'چهار', 5: 'پنج', 6: 'شش', 7: 'هفت', 8: 'هشت', 9: 'نه', 10: 'ده',
        11: 'یازده', 12: 'دوازده', 13: 'سیزده', 14: 'چهارده', 15: 'پانزده', 16: 'شانزده', 17: 'هفده', 18: 'هجده', 19: 'نوزده',
        20: 'بیست', 30: 'سی', 40: 'چهل', 50: 'پنجاه', 60: 'شصت', 70: 'هفتاد', 80: 'هشتاد', 90: 'نود',
        

    }

    return uniqNumbers(num)
}