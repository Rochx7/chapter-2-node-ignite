import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategory = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategory);

export { createCategoryController };
