import { twMerge } from 'tailwind-merge'
import { cx } from 'classix'

/**
 * Combines and merges multiple CSS class names or values using the classix and tailwind-merge libraries.
 * This function takes any number of arguments and passes them to the cx function from classix,
 * which generates a combined class name string. The result is then passed to twMerge from tailwind-merge,
 * which merges any overlapping or duplicate classes into a final single string.
 * @param args The CSS class names or values to be combined and merged.
 * @returns A merged string containing the combined CSS class names or values.
 */
export function cn(...args) {
  return twMerge(cx(...args))
}

/**
 * Checks whether a given link is an external link by evaluating its href attribute.
 * If the href is empty or null, it is considered an internal link.
 * Otherwise, if the href does not start with '/' or '#', it is regarded as an external link.
 * @param href The href attribute value of the link to be checked.
 * @returns A boolean value indicating whether the link is an external link.
 */
export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

/**
 * Formats a given date string into a localized date representation based on the 'en-US' locale.
 * The resulting date format includes the full month name, two-digit day, and the numeric year.
 * e.g. 'June 23, 1992'
 * @param date The date string to be formatted.
 * @returns A localized date string representation formatted as 'Month Day, Year'.
 */
export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateObj)
}

/**
 * Converts a given string to a dashed lowercase format.
 * This function replaces any occurrences of one or more consecutive spaces with a dash, and converts the resulting string to lowercase.
 * @param text The input text to be dasherized.
 * @returns The dasherized version of the input text.
 */
export const dasherize = (text) => String(text).replace(/ +/g, '-').toLowerCase()

/**
 * Retrieves the SpaceGrotesk-Medium font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the SpaceGrotesk-Medium font file as an array buffer.
 */
export const getMediumFont = async () => {
  const response = await fetch(new URL('@/assets/fonts/SpaceGrotesk-Medium.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
}

/**
 * Retrieves the SpaceGrotesk-SemiBold font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the SpaceGrotesk-SemiBold font file as an array buffer.
 */
export const getBoldFont = async () => {
  const response = await fetch(new URL('@/assets/fonts/SpaceGrotesk-SemiBold.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
}

/**
 * Checks if the current environment is set to development mode.
 * The function compares the value of the `NODE_ENV` environment variable with 'development'.
 * @returns A boolean value indicating whether the current environment is set to development mode.
 */
export const isDevelopment = process.env.NODE_ENV === 'development'

/**
 * Sorts an array of objects based on the specified property in ascending order.
 * The function compares the property values in a case-insensitive manner.
 * @param arr The array to be sorted.
 * @param prop The property name used for sorting the objects.
 * @returns The sorted array in ascending order based on the specified property.
 */
export const sortByProperty = (arr, prop) => {
  return arr.sort((a, b) => {
    const itemA = a[prop].toUpperCase()
    const itemB = b[prop].toUpperCase()

    if (itemA < itemB) {
      return -1
    } else if (itemA > itemB) {
      return 1
    }

    return 0
  })
}

/**
 * Sorts an array of blog post objects based on their date field (only for old blog posts) or publication dates in descending order.
 * The function compares the 'date' property of each post or 'firstPublishedAt' property from the 'sys' object.
 * The posts are sorted by creating Date objects from the publication dates and comparing them.
 * @param posts The array of blog post objects to be sorted.
 * @returns The sorted array of blog posts in descending order based on their publication dates.
 */
export const getSortedPosts = (posts) => {
  return posts.sort((a, b) => {
    const dateA = a.date || a.sys.firstPublishedAt
    const dateB = b.date || b.sys.firstPublishedAt
    return new Date(dateB) - new Date(dateA)
  })
}

/**
 * Creates an instance of the DateTimeFormat object with 'en-US' locale,
 * specifying the format to include the month and year in a two-digit and numeric format, respectively.
 * This formatter can be used to format date objects into a string representation with only the month and year.
 */
export const dateWithMonthAndYearFormatter = Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  year: 'numeric'
})

/**
 * Creates an instance of the DateTimeFormat object with 'tr-TR' locale,
 * specifying the format to include the day and month in a two-digit format.
 * This formatter can be used to format date objects into a string representation with the day and month included.
 */
export const dateWithDayAndMonthFormatter = Intl.DateTimeFormat('tr-TR', {
  day: '2-digit',
  month: '2-digit'
})

/**
 * Initializes an instance of `Intl.NumberFormat` named `viewCountFormatter`
 * with the 'nl-NL' locale for formatting view counts.
 *
 * Example usage:
 * const count = 1000000;
 * const formattedCount = viewCountFormatter.format(count);
 * console.log(formattedCount); // Output: "1.000.000"
 */
export const viewCountFormatter = new Intl.NumberFormat('nl-NL')
