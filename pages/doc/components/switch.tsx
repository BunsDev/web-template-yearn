import	React, {ReactElement}		from	'react';
import	{Card, Switch}				from	'@majorfi/web-lib/components';
import	ComponentAPI				from	'components/documentation/ComponentAPI';
import	Highlight					from	'components/documentation/Highlight';

const code = `
import	React		from	'react';
import	{Dropdown}	from	'@majorfi/web-lib/components';

export default function	App(): React.ReactElement {
	const	[isEnabled, set_isEnabled] = React.useState(false);

	return (
		<Switch
			isEnabled={isEnabled}
			onSwitch={set_isEnabled} />
	);
}`.trim();

export function	SwitchComponent(): ReactElement {
	const	[isEnabled, set_isEnabled] = React.useState(false);

	return (
		<Switch
			isEnabled={isEnabled}
			onSwitch={set_isEnabled} />
	);
}

function	DocumentationSwitch(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Switch'}</h1>
				<div className={'box-gradient-default'}>
					<SwitchComponent />
				</div>
				<Highlight code={code} />

				<h4 className={'mt-6 mb-1'}>{'Description'}</h4>
				<p className={'mb-2'}>{'A basic Switch component, accepting a boolean and switching this boolean. Nothing more, nothing less.'}</p>
				<p className={'mb-4'}>{'The component has headless states, meaning you have to send him the useState and you can controle the callback.'}</p>

				<ComponentAPI
					elements={[{
						title: 'isEnabled',
						type: 'boolean',
						description: 'Should the switch be in the enabled mode (true)'
					},
					{
						title: 'onSwitch',
						type: 'function',
						description: 'Callback when the switch is pressed. The function will send the new value (false if this was true, true if this was false).'
					}]} />

			</Card>
		</section>
	);
}

export default DocumentationSwitch;
