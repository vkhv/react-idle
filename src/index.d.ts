declare module 'react-idle' {
	export type IdleData = {idle: boolean};

	interface idleFunction extends Function {
		(idle: IdleData): JSX.Element | JSX.Element[] | null | boolean | string | void;
	}

	type Props = {
		render?: idleFunction;
		onChange?: idleFunction;
		timeout?: number;
		events?: string[];
		defaultIdle?: boolean
	};

	const Idle: React.ComponentClass<Props>;

	export default Idle;
}
