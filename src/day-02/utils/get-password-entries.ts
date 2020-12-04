import { parseInput } from '../../utils/parse-input';
import { PasswordEntry } from '../types';

/**
 * Parse and return the password entries from a given input.
 * 
 * @param file The file to fetch passwords from.
 */
export const getPasswordEntries = (file: string): PasswordEntry[] => {
  return parseInput(file).map((input) => {
    const regex = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/;
    const matches = regex.exec(input);

    return {
      digitOne: +matches[1],
      digitTwo: +matches[2],
      char: matches[3],
      password: matches[4],
    };
  });
};
