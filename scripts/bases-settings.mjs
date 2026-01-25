import Constants from './bases-constants.mjs';
import { statusesApplySettings } from './bases-main.mjs';

export function registerSettings() {
	game.settings.register(Constants.MODULE_ID, 'hudEnabled', {
		name: 'BASES.EnableStatusHUDSorting.Switch.Name',
		hint: 'BASES.EnableStatusHUDSorting.Switch.Hint',
		scope: 'user',
		config: false,
		type: new foundry.data.fields.BooleanField({ initial: true }),
		default: true,
		onChange: statusesApplySettings,
	});

	game.settings.register(Constants.MODULE_ID, 'hudFlowMode', {
		name: 'BASES.EnableStatusHUDSorting.SortingType.Name',
		hint: 'BASES.EnableStatusHUDSorting.SortingType.Hint',
		scope: 'user',
		config: true,
		type: new foundry.data.fields.StringField({ required: true, blank: false, initial: 'rows', choices: { rows: 'BASES.EnableStatusHUDSorting.SortingType.Choices.Rows', columns: 'BASES.EnableStatusHUDSorting.SortingType.Choices.Columns' } }),
		onChange: statusesApplySettings,
	});

	game.settings.register(Constants.MODULE_ID, 'hudColumns', {
		name: 'BASES.EnableStatusHUDSorting.NumberColumns.Name',
		hint: 'BASES.EnableStatusHUDSorting.NumberColumns.Hint',
		scope: 'user',
		config: true,
		type: new foundry.data.fields.NumberField({
			required: true,
			min: 2,
			max: 6,
			step: 1,
			initial: 3,
		}),
		onChange: statusesApplySettings,
	});
}
