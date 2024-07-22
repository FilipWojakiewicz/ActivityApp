using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            public DataContext Context { get; }
            public Handler(DataContext context)
            {
                this.Context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Context.Activities.Add(request.Activity);
                await Context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}