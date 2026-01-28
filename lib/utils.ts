import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prisma returns objects which needs to be converted to plain object
export function convertToPlainObject<T>(value:T):T{
  return JSON.parse(JSON.stringify(value));
}

// Format errors
export function formatError(error:any){
  if(error.name === 'ZodError'){
      return JSON.parse(error.message).map((err: any) => err.message).join(". ");
  }else if(error.name === 'PrismaClientKnownRequestError'){
      const field = error.meta?.target ? error.meta.target[0] : 'Field';
      return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
  }else{
    return typeof error.message === 'string' ? error.message :JSON.stringify(error.message);
  }
} 